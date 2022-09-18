from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import CreateCongratulation, GetAll
from schemas import Congratulations

app = FastAPI(title="Mom")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/congratulations")
async def congratulations():
    print(GetAll())
    return GetAll()

@app.post("/congratulations")
async def create(congratulation: Congratulations):
    congratulation = dict(congratulation)
    CreateCongratulation(title=congratulation["title"], description=congratulation["description"], name=congratulation["fullname"])
    return congratulation