class TasksController < ApplicationController
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

    private
    def task_params 
        params.permit :name, :is_complete
    end
end
