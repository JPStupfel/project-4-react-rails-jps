class UsersController < ApplicationController
    def index
        render json: User.all, status: 200
    end

    def create
        user = User.create user_params
        if user.valid?
            render json: user, status: 201
        else
            byebug
            render json: {errors: user.errors.full_error_messages}, status: 422
        end
    end

    private
    def user_params
        params.permit :username, :bio, :image, :age, :password, :password_confirmation
    end
end
