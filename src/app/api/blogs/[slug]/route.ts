
import { NextRequest, NextResponse } from 'next/server'
import connectDB from '../../../database/db';
import blogSchema from "../../../database/blogSchema"

type IParams = {
		params: {
			slug: string
		}
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure
	        const blog = await blogSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)

}







