from fastapi import FastAPI
import requests

app = FastAPI()

GEMMA_3_API_URL = "https://api.gemma3.com"

@app.get("/interact_with_gemma3")
def interact_with_gemma3(query: str):
    response = requests.get(f"{GEMMA_3_API_URL}/endpoint", params={"query": query})
    return response.json()

@app.get("/api/telemetry")
def get_telemetry_data():
    # Fetch telemetry data from Gemma 3 or another source
    response = requests.get(f"{GEMMA_3_API_URL}/telemetry")
    return response.json()

@app.get("/api/incidents")
def get_incidents_data():
    # Fetch incidents data from Gemma 3 or another source
    response = requests.get(f"{GEMMA_3_API_URL}/incidents")
    return response.json()

@app.get("/api/automation")
def get_automation_data():
    # Fetch automation data from Gemma 3 or another source
    response = requests.get(f"{GEMMA_3_API_URL}/automation")
    return response.json()
