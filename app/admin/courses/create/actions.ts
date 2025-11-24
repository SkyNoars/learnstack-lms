"use server";
import { prisma } from "@/lib/db";
import { getServerSession } from "@/lib/get-server-session";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseType } from "@/schemas/courseSchema";

export async function createCourse(values: CourseType): Promise<ApiResponse> {
  try {
    const session = await getServerSession();
    const validation = courseSchema.safeParse(values);
    if (!validation.success) {
      return {
        status: "error",
        message: "Invalid form data",
      };
    }

    const data = await prisma.course.create({
      data: {
        ...validation.data,
        userId: session?.user.id as string,
      },
    });

    return {
      status: "success",
      message: "Course created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Failed to create course",
    };
  }
}
