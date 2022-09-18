from pydantic import BaseModel

class Congratulations(BaseModel):
    title: str
    description: str
    fullname: str