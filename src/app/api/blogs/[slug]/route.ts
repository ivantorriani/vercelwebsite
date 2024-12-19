import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../database/db';
import blogSchema from "../../../database/blogSchema";

// Typing for params
type Params = {
  slug: string;
};

// GET API route handler
export async function GET(req: NextRequest, { params }: { params: Params }) {
  // Connect to the database
  await connectDB();

  // Extract slug from params
  const { slug } = params;

  // Fetch blog by slug
  
    const blog = await blogSchema.findOne({ slug }).orFail(); // Find blog or throw an error

    // Return blog data as a JSON response
    return NextResponse.json(blog);

}
