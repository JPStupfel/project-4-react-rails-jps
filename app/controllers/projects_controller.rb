class ProjectsController < ApplicationController
    before_action :require_login

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

    def update
        
            project = Project.find params['id']
            if project.valid?
                project.update project_params
                render json: project, status: 202
            else
                render json: {errors: project.errors.full_messages}, status: 422
            end
        

    end

    private
    def project_params
        params.permit :name, :details, :duedate, :budget
    end

    def require_login
        unless session.include? :user_id
            render json: {errors: ['sign in first']}, status: 422
        end
    end


end
