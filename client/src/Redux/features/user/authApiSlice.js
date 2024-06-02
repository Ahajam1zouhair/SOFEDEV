import { apiAuth } from "../../Api/apiAuth";

export const authApiSlice = apiAuth.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (build) => ({
    // register
    register: build.mutation({
      query: (date) => ({
        url: "api/user/register",
        method: "POST",
        body: date,
      }),
    }),
    // Login
    login: build.mutation({
      query: (date) => ({
        url: "/api/user/login",
        method: "POST",
        body: date,
      }),
    }),
    // get User by Id
    tagTypes: ["User"],
    profileUser: build.mutation({
      query: (id) => ({
        url: `/api/user/profile/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    // get All Users
    getAllUsers: build.query({
      query: ({ page = 1, pageSize = 10 }) => ({
        url: `/api/user`,
        params: {
          page,
          pageSize,
        },
      }),
      providesTags: ["User"],
    }),
    // New Profile picture
    profileImage: build.mutation({
      query: ({ id, image }) => ({
        url: `/api/user/profile/profile-photo-upload/${id}`,
        method: "POST",
        body: image,
      }),
      invalidatesTags: ["User"],
    }),
    // New Profile picture
    deletePicture: build.mutation({
      query: (id) => ({
        url: `/api/user/profile/profile-photo-upload/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    // Update Profile
    updateProfile: build.mutation({
      query: ({ id, data }) => ({
        url: `/api/user/profile/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    // Update Profile
    changePassword: build.mutation({
      query: ({ id, data }) => ({
        url: `/api/user/profile/changepassword/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getAllmatchs: build.query({
      query: () => ({
        url: "/api/match",
      }),
      providesTags: ["Match"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useProfileImageMutation,
  useProfileUserMutation,
  useDeletePictureMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetAllUsersQuery,
} = authApiSlice;
