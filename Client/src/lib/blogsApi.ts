import axios from "axios";

const blogsApi = axios.create({
  baseURL: "/api/blog",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export interface Blog {
  _id: string;
  title: string;
  content: string;
  coverImage?: string;
  status: "draft" | "published" | "unpublished";
  author: {
    _id: string;
    name: string;
    email: string;
  };
  views: number;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBlogData {
  title: string;
  content: string;
  coverImage?: string;
  status?: "draft" | "published" | "unpublished";
}

export interface UpdateBlogData {
  title?: string;
  content?: string;
  coverImage?: string;
  status?: "draft" | "published" | "unpublished";
}

export interface BlogsResponse {
  success: boolean;
  blogs?: Blog[];
  blog?: Blog;
  message?: string;
}

export const getBlogs = async (): Promise<BlogsResponse> => {
  const response = await blogsApi.get("/");
  return response.data;
};

export const getBlog = async (id: string): Promise<BlogsResponse> => {
  const response = await blogsApi.get(`/${id}`);
  return response.data;
};

export const createBlog = async (data: CreateBlogData): Promise<BlogsResponse> => {
  const response = await blogsApi.post("/", data);
  return response.data;
};

export const updateBlog = async (id: string, data: UpdateBlogData): Promise<BlogsResponse> => {
  const response = await blogsApi.patch(`/${id}`, data);
  return response.data;
};

export const deleteBlog = async (id: string): Promise<BlogsResponse> => {
  const response = await blogsApi.delete(`/${id}`);
  return response.data;
};

export default blogsApi;