import fs from "fs"
import path from "path"

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "Shachi_L_H_Gowda_my_cv.pdf")
  const fileStream = fs.createReadStream(filePath)

  res.setHeader("Content-Type", "application/pdf")
  res.setHeader("Content-Disposition", "attachment; filename=Shachi_L_H_Gowda_my_cv.pdf")

  fileStream.pipe(res)
}

