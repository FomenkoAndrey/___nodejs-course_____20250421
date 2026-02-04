export const createHTMLTemplate = (htmlInjection, title = 'Node.js Server') => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; background: #0f172a; color: #f8fafc; font-family: system-ui, -apple-system, sans-serif;">
    <nav style="margin-top: 2rem; padding: 0.75rem 2rem; background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid #334155; border-radius: 9999px; display: flex; gap: 2rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5); z-index: 10;">
        <a href="/" style="color: #f8fafc; text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Головна</a>
        <a href="/todos" style="color: #f8fafc; text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Завдання (HTML)</a>
        <a href="/form" style="color: #f8fafc; text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Нове завдання</a>
        <a href="/json" style="color: #f8fafc; text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">JSON</a>
        <a href="/text" style="color: #f8fafc; text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Текст</a>
        <a href="/test-404" style="color: #fb7185; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Тест 404 ⚡</a>
    </nav>
    <main style="flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; padding: 3rem 0;">
        <div style="text-align: center; padding: 3rem; background: #1e293b; border-radius: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid #334155; min-width: 400px; max-width: 90%;">
            ${htmlInjection}
        </div>
    </main>
    <footer style="padding-bottom: 2rem; color: #475569; font-size: 0.8rem; letter-spacing: 0.05em;">
        NODE.JS COURSE &copy; 2026
    </footer>
</body>
</html>
`

export const rootContent = `
      <h1 style="font-size: 4rem; margin: 0; background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.025em;">
        Hello World!
      </h1>
      <p style="margin-top: 1rem; color: #94a3b8; font-size: 1.25rem;">Ласкаво просимо до вашого першого Node.js сервера</p>
`

export const notFoundContent = `
    <h1 style="font-size: 8rem; margin: 0; background: linear-gradient(to right, #f43f5e, #fb7185); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.05em; line-height: 1;">
      404
    </h1>
    <h2 style="font-size: 2rem; margin-top: 1rem; color: #f1f5f9; font-weight: 600;">Сторінку не знайдено</h2>
    <p style="margin-top: 1rem; color: #94a3b8; font-size: 1.125rem; max-width: 400px;">На жаль, шлях, який ви шукаєте, не існує або був переміщений.</p>
    <a href="/" style="display: inline-block; margin-top: 2rem; padding: 0.75rem 1.5rem; background: #334155; color: #f8fafc; text-decoration: none; border-radius: 12px; font-weight: 500; transition: background 0.2s;">Повернутися на головну</a>
`

export const todoFormContent = `
    <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #f1f5f9; font-weight: 600;">Створити новий Todo</h2>
    <form action="/todos" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%; max-width: 400px; margin: 0 auto; text-align: left;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label for="id" style="color: #94a3b8; font-size: 0.875rem;">ID завдання</label>
        <input type="number" id="id" name="id" value="99" required style="padding: 0.75rem 1rem; background: #0f172a; border: 1px solid #334155; border-radius: 12px; color: #f8fafc; outline: none; transition: border-color 0.2s;">
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label for="title" style="color: #94a3b8; font-size: 0.875rem;">Назва завдання</label>
        <input type="text" id="title" name="title" value="Mastering Node.js" required style="padding: 0.75rem 1rem; background: #0f172a; border: 1px solid #334155; border-radius: 12px; color: #f8fafc; outline: none; transition: border-color 0.2s;">
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <input type="checkbox" id="completed" name="completed" value="true" checked style="width: 1.25rem; height: 1.25rem; accent-color: #38bdf8;">
        <label for="completed" style="color: #f1f5f9; font-size: 1rem;">Завершено</label>
      </div>
      <button type="submit" style="margin-top: 1rem; padding: 0.75rem 1.5rem; background: linear-gradient(to right, #38bdf8, #818cf8); color: #0f172a; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: transform 0.2s, opacity 0.2s;">
        Зберегти завдання
      </button>
      <a href="/" style="text-align: center; color: #94a3b8; text-decoration: none; font-size: 0.875rem; margin-top: 0.5rem;">Скасувати</a>
    </form>
`

export const todoListContent = (todos) => `
    <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #f1f5f9; font-weight: 600;">Список завдань</h2>
    <div style="width: 100%; max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
      ${todos
        .map(
          (todo) => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem; background: #0f172a; border: 1px solid ${todo.completed ? '#10b981' : '#334155'}; border-radius: 16px; transition: transform 0.2s;">
          <div style="text-align: left;">
            <div style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.25rem;">ID: ${todo.id}</div>
            <div style="color: ${todo.completed ? '#10b981' : '#f8fafc'}; font-size: 1.125rem; font-weight: 500; text-decoration: ${todo.completed ? 'line-through' : 'none'}; opacity: ${todo.completed ? '0.7' : '1'};">
              ${todo.title}
            </div>
          </div>
          <div style="padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; background: ${todo.completed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(148, 163, 184, 0.1)'}; color: ${todo.completed ? '#10b981' : '#94a3b8'}; border: 1px solid ${todo.completed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(148, 163, 184, 0.2)'};">
            ${todo.completed ? 'Виконано' : 'В процесі'}
          </div>
        </div>
      `
        )
        .join('')}
    </div>
    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
      <a href="/form" style="padding: 0.75rem 1.5rem; background: linear-gradient(to right, #38bdf8, #818cf8); color: #0f172a; text-decoration: none; border-radius: 12px; font-weight: 600;">Додати нове</a>
      <a href="/" style="padding: 0.75rem 1.5rem; background: #334155; color: #f8fafc; text-decoration: none; border-radius: 12px; font-weight: 600;">На головну</a>
    </div>
`
