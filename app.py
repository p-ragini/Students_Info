from flask import Flask, render_template, url_for, request, flash
from flask_script import Manager
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import asc, desc
import os, sqlalchemy

basedir = os.path.join(os.path.dirname(__file__))
 
app = Flask(__name__)

app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'student.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret'

manager = Manager(app)

db = SQLAlchemy(app)

class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(64))
    mname = db.Column(db.String(64), nullable=True)
    lname = db.Column(db.String(64))
    maths = db.Column(db.Integer())
    chemistry = db.Column(db.Integer())
    roll = db.Column(db.Integer(), unique=True)
    physics = db.Column(db.Integer())
    total = db.Column(db.Integer())
    percentage = db.Column(db.Float())

    def __repr__(self):
        return '<Student %r>' % self.fname

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/marks',methods=["POST","GET"])
def marks():
    if request.method == 'POST':
        form = request.form
        roll = form['rollno']
        fname = form['fname']
        mname = form['mname']
        lname = form['lname']
        maths = int(form['marksM'])
        chemistry = int(form['marksC'])
        physics = int(form['marksP'])
        total = maths + chemistry + physics
        percentage = float("{:.2f}".format(total/3))

        student = Student(fname=fname, mname=mname, lname=lname, maths=maths, physics=physics, chemistry=chemistry, total=total, percentage=percentage, roll=roll)

        db.session.add(student)
        db.session.commit()

        flash('Student Record added Successfully.', category='success')

        return render_template('marks.html')

    return render_template("marks.html")

@app.route('/leaderboard')
def leaderboard():
    query_obj = db.session.query(Student)
    desc_expression = sqlalchemy.sql.expression.desc(Student.percentage)
    students = query_obj.order_by(desc_expression)
    student = []
    for s in students:
        student.append(s)
     
    return render_template("leaderboard.html", students=student)


if __name__=="__main__":
    manager.run()
