from transformers import AutoModelForCausalLM, AutoTokenizer
import gradio as gr

model_name = "Ramu7046/mistral-finetuned"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

def generate_response(prompt):
    inputs = tokenizer(prompt, return_tensors="pt")
    output = model.generate(**inputs, max_length=100)
    return tokenizer.decode(output[0], skip_special_tokens=True)

iface = gr.Interface(fn=generate_response, inputs="text", outputs="text")
iface.launch()
