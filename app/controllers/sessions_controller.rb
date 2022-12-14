class SessionsController < ApplicationController


    def create
         user = User.find_by username: params[:username]
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 201
        else
            render json: {errrors: ['wrong credentials']}, status: 422
        end
    end

    def show
        user = User.find_by id: session[:user_id]
        if user
            render json: user, status: 201
        else
            render json: {errrors: ['log in first']}, status: 401
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            
            render json: {}, status: 204
        else
            render json: {errors: ['log in first']}, status: 422
        end
    end


end
