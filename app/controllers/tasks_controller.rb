class TasksController < ApplicationController
   
    before_action :require_login

    def index
        render json: Task.all, status: 200
    end

    def update
        task = Task.find params['id']
        if task.valid?
            task.update task_params
            # byebug
            render json: task, status: 202
        else
            render json: {errors: task.errors.full_error_messages}, status: 422
        end

    end

    def destroy
        task = Task.find params['id']
        if task.valid?
            task.destroy
            render json: {message: "deleted"}, status: 204
        else
            render json: {errors: task.errors.full_messages}, status:422
        end
    end

    def create
        task = Task.create task_params
        if task.valid?
            render json: task, status: 201
        else
            render json: {errors: task.errors.full_error_messages}, status: 422
        end
    end

    private
    def task_params 
        params.permit :name, :is_complete, :user_id, :project_id
    end

    def require_login
        unless session.include? :user_id
            render json: {errors: ['sign in first']}, status: 422
        end
    end
end
