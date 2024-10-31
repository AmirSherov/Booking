

# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel, EmailStr
# from typing import List
# import sqlite3
# from fastapi.middleware.cors import CORSMiddleware

# # Создаем экземпляр приложения FastAPI
# app = FastAPI()

# # Разрешаем CORS для взаимодействия с фронтендом
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Подключаемся к базе данных SQLite
# conn = sqlite3.connect("database.db", check_same_thread=False)
# cursor = conn.cursor()

# # Создаем таблицы users и reservs, если они еще не созданы
# cursor.execute("""
# CREATE TABLE IF NOT EXISTS users (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     Email TEXT UNIQUE,
#     Password TEXT
# )
# """)
# cursor.execute("""
# CREATE TABLE IF NOT EXISTS reservs (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     HotelName TEXT,
#     Date TEXT,
#     Price REAL,
#     Time TEXT
# )
# """)
# conn.commit()

# # Определяем модели данных
# class UserRegister(BaseModel):
#     Email: EmailStr
#     Password: str
#     ConfirmPassword: str

# class Reserv(BaseModel):
#     HotelName: str
#     Date: str
#     Price: float
#     Time: str

# # Маршруты для работы с users
# @app.get("/users", response_model=List[dict])
# def get_users():
#     try:
#         cursor.execute("SELECT id, email FROM users")
#         users = cursor.fetchall()
#         return [{"id": u[0], "email": u[1]} for u in users]
#     except Exception as e:
#         print(f"Error fetching users: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при получении пользователей")

# @app.post("/users")
# def add_user(user: UserRegister):
#     if user.Password != user.ConfirmPassword:
#         raise HTTPException(status_code=400, detail="Пароли не совпадают")

#     try:
#         cursor.execute("INSERT INTO users (Email, Password) VALUES (?, ?)", (user.Email, user.Password))
#         conn.commit()
#         user_id = cursor.lastrowid  # Получаем id нового пользователя
#         return {"message": "Пользователь успешно добавлен", "id": user_id}
#     except sqlite3.IntegrityError:
#         raise HTTPException(status_code=400, detail="Email уже зарегистрирован")
#     except Exception as e:
#         print(f"Error adding user: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при добавлении пользователя")

# @app.delete("/users/{user_id}")
# def delete_user(user_id: int):
#     try:
#         cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
#         conn.commit()
#         return {"message": "Пользователь успешно удален"}
#     except Exception as e:
#         print(f"Error deleting user: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при удалении пользователя")

# # (Оставшаяся часть вашего кода для reservs остается такой же...)

# # Маршруты для работы с reservs
# @app.get("/reservs", response_model=List[dict])
# def get_reservs():
#     try:
#         cursor.execute("SELECT id, HotelName, Date, Price, Time FROM reservs")
#         reservs = cursor.fetchall()
#         return [{"id": r[0], "HotelName": r[1], "Date": r[2], "Price": r[3], "Time": r[4]} for r in reservs]
#     except Exception as e:
#         print(f"Error fetching reservations: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при получении резервов")

# @app.post("/reservs")
# def add_reserv(reserv: Reserv):
#     try:
#         cursor.execute("INSERT INTO reservs (HotelName, Date, Price, Time) VALUES (?, ?, ?, ?)",
#                        (reserv.HotelName, reserv.Date, reserv.Price, reserv.Time))
#         conn.commit()
#         reserv_id = cursor.lastrowid  # Получаем id последней добавленной записи
#         return {"message": "Резервирование успешно добавлено", "id": reserv_id}
#     except Exception as e:
#         print(f"Error adding reservation: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при добавлении резервирования")

# @app.delete("/reservs/{reserv_id}")
# def delete_reserv(reserv_id: int):
#     try:
#         cursor.execute("DELETE FROM reservs WHERE id = ?", (reserv_id,))
#         conn.commit()
#         return {"message": "Резервирование успешно удалено"}
#     except Exception as e:
#         print(f"Error deleting reservation: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при удалении резервирования")

# # Добавленный маршрут для получения резервации по ID
# @app.get("/reservs/{reserv_id}", response_model=Reserv)
# def get_reserv_by_id(reserv_id: int):
#     try:
#         cursor.execute("SELECT * FROM reservs WHERE id = ?", (reserv_id,))
#         reserv = cursor.fetchone()
#         if reserv is None:
#             raise HTTPException(status_code=404, detail="Резервирование не найдено")
#         return {
#             "id": reserv[0],
#             "HotelName": reserv[1],
#             "Date": reserv[2],
#             "Price": reserv[3],
#             "Time": reserv[4]
#         }
#     except Exception as e:
#         print(f"Error fetching reservation by ID: {e}")
#         raise HTTPException(status_code=500, detail="Ошибка при получении резервирования")

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

# Создаем экземпляр приложения FastAPI
app = FastAPI()

# Разрешаем CORS для взаимодействия с фронтендом
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключаемся к базе данных SQLite
conn = sqlite3.connect("database.db", check_same_thread=False)
cursor = conn.cursor()

# Создаем таблицы users и reservs, если они еще не созданы
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Email TEXT UNIQUE,
    Password TEXT
)
""")
cursor.execute("""
CREATE TABLE IF NOT EXISTS reservs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    HotelName TEXT,
    Date TEXT,
    Price REAL,
    Time TEXT
)
""")
conn.commit()

# Определяем модели данных
class UserRegister(BaseModel):
    Email: EmailStr
    Password: str
    ConfirmPassword: str

class Reserv(BaseModel):
    HotelName: str
    Date: str
    Price: float
    Time: str

# Маршруты для работы с users
@app.get("/users", response_model=List[dict])
def get_users():
    try:
        cursor.execute("SELECT id, Email, Password FROM users")  # Теперь возвращаем пароль
        users = cursor.fetchall()
        return [{"id": u[0], "email": u[1], "password": u[2]} for u in users]  # Включаем пароль в ответ
    except Exception as e:
        print(f"Error fetching users: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при получении пользователей")

@app.post("/users")
def add_user(user: UserRegister):
    if user.Password != user.ConfirmPassword:
        raise HTTPException(status_code=400, detail="Пароли не совпадают")

    try:
        cursor.execute("INSERT INTO users (Email, Password) VALUES (?, ?)", (user.Email, user.Password))
        conn.commit()
        user_id = cursor.lastrowid  # Получаем id нового пользователя
        return {"message": "Пользователь успешно добавлен", "id": user_id}
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Email уже зарегистрирован")
    except Exception as e:
        print(f"Error adding user: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при добавлении пользователя")

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    try:
        cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
        conn.commit()
        return {"message": "Пользователь успешно удален"}
    except Exception as e:
        print(f"Error deleting user: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при удалении пользователя")

# Маршруты для работы с reservs
@app.get("/reservs", response_model=List[dict])
def get_reservs():
    try:
        cursor.execute("SELECT id, HotelName, Date, Price, Time FROM reservs")
        reservs = cursor.fetchall()
        return [{"id": r[0], "HotelName": r[1], "Date": r[2], "Price": r[3], "Time": r[4]} for r in reservs]
    except Exception as e:
        print(f"Error fetching reservations: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при получении резервов")

@app.post("/reservs")
def add_reserv(reserv: Reserv):
    try:
        cursor.execute("INSERT INTO reservs (HotelName, Date, Price, Time) VALUES (?, ?, ?, ?)",
                       (reserv.HotelName, reserv.Date, reserv.Price, reserv.Time))
        conn.commit()
        reserv_id = cursor.lastrowid  # Получаем id последней добавленной записи
        return {"message": "Резервирование успешно добавлено", "id": reserv_id}
    except Exception as e:
        print(f"Error adding reservation: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при добавлении резервирования")

@app.delete("/reservs/{reserv_id}")
def delete_reserv(reserv_id: int):
    try:
        cursor.execute("DELETE FROM reservs WHERE id = ?", (reserv_id,))
        conn.commit()
        return {"message": "Резервирование успешно удалено"}
    except Exception as e:
        print(f"Error deleting reservation: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при удалении резервирования")

# Добавленный маршрут для получения резервации по ID
@app.get("/reservs/{reserv_id}", response_model=Reserv)
def get_reserv_by_id(reserv_id: int):
    try:
        cursor.execute("SELECT * FROM reservs WHERE id = ?", (reserv_id,))
        reserv = cursor.fetchone()
        if reserv is None:
            raise HTTPException(status_code=404, detail="Резервирование не найдено")
        return {
            "id": reserv[0],
            "HotelName": reserv[1],
            "Date": reserv[2],
            "Price": reserv[3],
            "Time": reserv[4]
        }
    except Exception as e:
        print(f"Error fetching reservation by ID: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при получении резервирования")
