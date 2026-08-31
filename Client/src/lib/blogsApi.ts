import axios from "axios";

const blogsApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8008"}/api/blogs`,
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

export interface Comment {
  _id: string;
  blog: string;
  author: {
    _id: string;
    name: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentsResponse {
  success: boolean;
  comments: Comment[];
  nextCursor?: string | null;
  hasMore: boolean;
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

// Comments APIs
export const getComments = async (
  blogId: string,
  cursor?: string
): Promise<CommentsResponse> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8008"}/api/comments/${blogId}`,
    {
      params: { cursor },
      withCredentials: true,
    }
  );
  return response.data;
};

export const createComment = async (
  blogId: string,
  content: string
): Promise<{ success: boolean; comment: Comment }> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8008"}/api/comments/${blogId}`,
    { content },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateComment = async (
  commentId: string,
  content: string
): Promise<{ success: boolean; comment: Comment }> => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8008"}/api/comments/${commentId}`,
    { content },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const deleteComment = async (
  commentId: string
): Promise<{ success: boolean }> => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8008"}/api/comments/${commentId}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export default blogsApi;