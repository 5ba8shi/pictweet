class Users::OmniauthCallbackController < Devise::OmniauthCallbacksController
  def facebook
    callback_form :facebook
  end

  def google_oauth2
    callback_from :google
  end


  private
  def callback_from(providefr)
    provider = provider.to_s
    @user = User.find_for_oauth(request.env['omniauth.auth'])

    if @user.persisted?
         #ログイン
      flash[:notice] = I18n.t('devise.omniauth_callbacks.success', kind: provider.capitalize)      
      sign_in_and_redirect @user, event: :authentication

    else #新規登録
      session[:nickname] = @user.nickname
      session[:email] = @user.email
      session[:password] = @user.password
      session[:provider] = @user.provider
      session[:uid] = @user.uid
      redirect_to new_user_registration_sns_path
    end
  end
end