class UsersController < ApplicationController
    def index
        if session[:user_id]
         render json: User.all, status: 200
        else
            render json: {errors: ['sign in first']}, status: 422
        end
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
            render json: user, status: 201
        else
            render json: {errrors: ['log in first']}, status: 401
        end
    end

    private
    def user_params
        params.permit :username, :bio, :image, :age, :password, :password_confirmation
    end
end
