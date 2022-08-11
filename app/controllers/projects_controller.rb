class ProjectsController < ApplicationController

    def index
        if session[:user_id]
            render json: Project.all, status: 200
        else
            render json: {error: 'Log in first'}, status: 401
        end
    end
end
