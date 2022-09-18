from models import Congratulations
from sqlmodel import Session, SQLModel, create_engine, select

engine = create_engine("<YOUR DATABASE LINK>")

SQLModel.metadata.create_all(engine)

session = Session(engine)

def CreateCongratulation(title, description, name):
    session.add(Congratulations(title=title, description=description, fullname=name))
    session.commit()

def GetAll():
    return session.exec(select(Congratulations)).all()
