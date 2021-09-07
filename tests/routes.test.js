import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import Post from "../models/Post.js";

beforeAll(async () => {
  const MONGODB_TEST_URI = `mongodb://127.0.0.1/projectsTestDatabase`;

  await mongoose.connection.close();
  await mongoose.connect(MONGODB_TEST_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const posts = [
    {
      title: "Paul",
      image_url: "https://www.unsplash.com/64ea.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Nadyia",
      image_url: "https://www.unsplash.com/64ea.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Andrew",
      image_url: "https://www.unsplash.com/64ea.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Alex",
      image_url: "https://www.unsplash.com/64ea.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  await Post.insertMany(posts);
  console.log("Created Posts!");
});

let postId;
describe("Test the express routes for projects", () => {
  it("should show all posts", async () => {
    const res = await request(app).get(`/api/posts`);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty("_id");
    postId = res.body[0]._id;
  });
  it("should show a specific project", async () => {
    // create a GET request with SuperTest using the projectId from the previous POST test
    const res = await request(app).get(`/api/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });
  // test the POST express route for the '/api/projects' path
  it("should create a new post", async () => {
    // create a POST request with SuperTest
    const res = await request(app).post(`/api/posts`).send({
      title: "Test Post",
      image_url: "http://www.testing.com",
      description: "http://www.testing.com",
    });
    // test that the POST request was successful
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });
  it("should update a post", async () => {
    // create a PUT request with SuperTest using the projectId from the POST test
    const res = await request(app).put(`/api/posts/${postId}`).send({
      title: "Update Test Post",
      image_url: "http://www.testing.com",
      description: "http://www.testing.com",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });
  it("should delete a post", async () => {
    const res = await request(app).del(`/api/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Post deleted");
  });
});
afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});
