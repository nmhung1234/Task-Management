import TaskServices from "../../services/user/task.service.js";

const TaskSv = new TaskServices();
export default class UserTaskController {
    async upTask(req, res) {
        const { owner_id, dataContent, deadline, status, label_id } = req.body;
        const result = await TaskSv.upTask(owner_id, dataContent, deadline, status, label_id);
        res.send(result);
    }
    async getAllTask(req, res) {
        const { owner_id } = req.query;
        const result = await TaskSv.getAllTask(owner_id);
        res.send(result);
    }
    async completeTask(req, res) {
        const { owner_id, task_id } = req.body;
        const result = await TaskSv.completeTask(owner_id, task_id);
        res.send(result);
    }
    async deleteTask(req, res) {
        const { task_id } = req.query;
        const result = await TaskSv.deleteTask(task_id);
        res.send(result);
    }
}
