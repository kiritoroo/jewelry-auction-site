import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from settings import origins

load_dotenv()

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

@app.get("/")
async def root() -> dict:
  """Test endpoint"""
  return { "message": "Jewerly Auction Site" }

if __name__ == "__main__":
  uvicorn.run("main:app", host=os.environ.get('DOMAIN'), port=int(os.environ.get('PORT')), log_level="info", reload=True)