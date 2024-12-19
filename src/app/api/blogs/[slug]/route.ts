import { NextRequest, NextResponse } from 'next/server'
import connectDB from '../../../database/db';
import blogSchema from "../../../database/blogSchema"

// Typing for params
type Params = {
  slug: string;
}

// GET API route handler
export async function GET(req: NextRequest, { params }: { params: Params }) {
  await connectDB(); // Connect to the database

  const { slug } = params; // Extract slug from params

  // Fetch blog by slug
  const blog = await blogSchema.findOne({ slug }).orFail(); // Find blog, or fail if not found

  // Return blog data as a JSON response
  return NextResponse.json(blog);
}
