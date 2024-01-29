const Project = require("../models/Project");

exports.createProject = async (req, res) => {
    try {
      const { name, description } = req.body;
      const newProject = new Project({ name, description });
      await newProject.save();
      res.status(201).send('Project created successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

  exports.getAllProjects = async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };