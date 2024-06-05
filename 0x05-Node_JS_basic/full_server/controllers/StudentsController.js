import { readDatabase } from '../utils';

export default class StudentsController {
    static async getAllStudents(req, res) {
        const database = req.query.database;

        if(!database) {
            res.status(400).send('Missing database parameter');
            return;
        }

        try {
            const students = await readDatabase(database);
            let response = 'This is the list of our students\n';
            for (const [field, names] of Object.entries(students).sort()) {
                response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            }
            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const database = req.query.database;
        const major= req.params.major;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(database);
            const studentList = students[major] || [];
            res.status(200).send(`List: ${stdentList.json(', ')}`);
        } catch (error) {
            res.status(500).send('cannot load the database');
        }
    }
}