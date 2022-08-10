class SessionsController < ApplicationController


    def create
         user = User.find_by username: params[:username]
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 201
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


end
