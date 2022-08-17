class UsersController < ApplicationController
   before_action :require_login

    
    def index
         render json: User.all, status: 200
    end

    def create
        user = User.create user_params
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: 201
        else
            
            render json: {errors: user.errors.full_error_messages}, status: 422
        end
    end

    def show
        user = User.find_by id: params[:id]
        if user
            render json: user, serializer: UserTasksSerializer ,status: 201
        else
            render json: {errrors: user.errors.full_messages}, status: 401
        end
    end

    private
    def user_params
        params.permit :username, :bio, :image, :age, :password, :password_confirmation
    end

    def require_login
        unless session.include? :user_id
            render json: {errors: ['sign in first']}, status: 422
        end
    end

end
