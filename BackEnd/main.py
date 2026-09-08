from fastapi import FastAPI
from .Routers import product
from .Routers import purchases
from .Routers import users

app = FastAPI()
app.include_router(users)
app.include_router(product)
app.include_router(purchases)

@app.get('/')
async def index():
    return {'message':'Welcome to Lore'}