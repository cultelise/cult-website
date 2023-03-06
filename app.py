from flask import Flask, render_template
import json

app = Flask(__name__)


@app.route("/")
def hello_elise():
    title = "The Eye of The World..."
    preview = "Shall Open Once More"
    return render_template(
        "index.html",
        title=title,
        preview=preview,
    )


if __name__ == "__main__":
    app.run(debug=True)
