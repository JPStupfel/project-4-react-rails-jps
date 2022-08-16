class ProjectsController < ApplicationController
    

    def index
        if session[:user_id]
            render json: Project.all
        else
            render json: {error: 'Log in first'}, status: 401
        end
    end

    def show
        project = Project.find_by id: params[:id]
        if project
            render json: project, serializer: ProjectShowSerializer, status: 200
        else
            render json: {errrors: ['log in first']}, status: 401
        end
    end

  
    def create
        project = Project.create project_params
        if project.valid?
            render json: project, status: 201
        else
            render json: {errors: project.errors.full_error_messages}, status: 422
        end
    end

    private
    def project_params
        params.permit :name, :details, :duedate, :budget
    end


end
