const request = require('supertest');
const { faker } = require('@faker-js/faker');

const app = require('./app');

const newUser = {
    username: faker.internet.email(),
    password: faker.internet.password()
};

describe('Testing Authentication', () => {
    it('registration with valid username and password', async () => {
  
      const response = await request(app)
        .post('/register')
        .send(newUser)
        .expect(201); // Expect successful creation
    });
  
    it('login with valid username and password', async () => {
  
        const response = await request(app)
          .post('/login')
          .send(newUser)
          .expect(200); // Expect successful creation
      });
});

const newProject = {
    name: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription()
}


describe('Testing Project', () => {
    it('Create new project', async () => {
  
      const response = await request(app)
        .post('/project')
        .send(newProject)
        .expect(201); // Expect successful creation
    });

    it('should return a list of projects', async () => {
        const response = await request(app)
          .get('/projects') // Replace with your actual endpoint
          .expect(200); // Expect successful response
    
        // Assert that the response body is an array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Additional assertions (optional):
        expect(response.body.length).toBeGreaterThan(0); // Check if the list is not empty
        // Add more specific assertions based on your API's expected response structure
      });
});

const newArticle = {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    project: faker.commerce.productAdjective()
}

describe('Testing Article', () => {
    it('Create new article', async () => {
  
      const response = await request(app)
        .post('/knowledge/article')
        .send(newArticle)
        .expect(201); // Expect successful creation
    });

    it('should return a list of articles', async () => {
        const response = await request(app)
          .get('/knowledge/articles') // Replace with your actual endpoint
          .expect(200); // Expect successful response
    
        // Assert that the response body is an array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Additional assertions (optional):
        expect(response.body.length).toBeGreaterThan(0); // Check if the list is not empty
        // Add more specific assertions based on your API's expected response structure
      });
});

describe('Testing Document', () => {

    it('should return a list of documents', async () => {
        const response = await request(app)
          .get('/documents?appId=a667ddd8-1a75-4b34-babc-b041d89a11e8') // Replace with your actual endpoint
          .expect(200); // Expect successful response
    
        // Assert that the response body is an array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Additional assertions (optional):
        expect(response.body.length).toBeGreaterThan(0); // Check if the list is not empty
        // Add more specific assertions based on your API's expected response structure
      });
});