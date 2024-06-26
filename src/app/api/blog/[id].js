import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  const { id } = req.query;

  const postFilePath = path.join(process.cwd(), 'content', `${id}.md`);
  if (!fs.existsSync(postFilePath)) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }

  const source = fs.readFileSync(postFilePath, 'utf8');
  const { data, content } = matter(source);

  res.status(200).json({
    frontmatter: data,
    content
  });
}
