class ProjectsController < ApplicationController
    

    def index
        if session[:user_id]
            render json: Project.all, status: 200
        else
            render json: {error: 'Log in first'}, status: 401
        end
    end

    def show
        project = Project.find_by id: params[:id]
        if project
            render json: project, status: 201
        else
            render json: {errrors: ['log in first']}, status: 401
        end
    end
end
