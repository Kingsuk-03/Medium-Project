# Medium Project 📝

A **full-stack Medium-style blogging platform** where users can write, publish, and read blogs. Built with a modern tech stack, featuring a **React + TypeScript frontend** and a **Cloudflare Workers backend**.

🚀 **Serverless**, **scalable**, and **developer-friendly**.

## 🌐 Live Preview

[https://medium-project-frontend.vercel.app](https://medium-project-lovat.vercel.app/)

## 🚀 Features

- ✅ JWT Authentication (Signup, Signin)
- ✍️ Create and publish blogs
- 👀 View all blogs and single posts
- 📄 Author info with name and initials
- 🌐 Fully responsive UI
- ⚡ Serverless backend using Cloudflare Workers
- ♻️ Shared validation and types using `common` package

---

## 🛠️ Tech Stack

| Layer    | Stack                                                                |
| -------- | -------------------------------------------------------------------- |
| Frontend | React, TypeScript, Tailwind, Axios, Vercel                           |
| Backend  | **Cloudflare Workers**, **PostgreSQL (Pooling)**, JWT, Zod, Wrangler |
| Shared   | Common **npm** package (Zod + Types)                                 |
| Tools    | Wrangler, Vercel, GitHub, npm                                        |

---

## 📁 Folder Structure

```
Medium-Project/
│
├── frontend/            # React frontend
|    |
│    ├──src/
|        ├── components/
│        ├── pages/
│        ├── hooks/
│        └── config.ts
│
└── backend/            # Cloudflare Workers backend
    ├── src/routes/
    ├── middleware/
    ├── models/
    ├── utils/
    ├── index.ts
    ├── wrangler.jsonc
    └── .dev.vars
```

---

## ✅ Environment Variables

| Variable       | Description                              | File           |
| -------------- | ---------------------------------------- | -------------- |
| `DATABASE_URL` | PostgreSQL connection URI (with pooling) | wrangler.jsonc |
| `JWT_SECRET`   | Secret key for signing JWT tokens        | wrangler.jsonc |

---

## 🌍 Deployment Info

### Backend

- **Deployed on Cloudflare Workers**
- **Uses connection pooling** to prevent exhausting PostgreSQL connections on each request

> ⚠️ Cloudflare Workers have limited memory & execution time. Connection pooling is essential for efficiency and stability.

### Frontend

- **Deployed on Vercel**
- Auto redeploys on commit via GitHub

## 🤝 Contributing

Pull requests are welcome. Please open issues for major features or improvements first.
