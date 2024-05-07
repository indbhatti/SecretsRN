'use client'
import Card from '../Card';
import Form from '../Form'

export default async function Register() {

  async function submit(user: { username: string, password: string }) {
    try {
      const response = await fetch(`${process.env.API_URL || "http://localhost:3000"}/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response)

      if (!response.ok) {

        throw new Error('Failed to submit user data');
      }

      const result = await response.json();
      if (result.status === 409) {
        alert('User already exists');
        throw new Error('User already exists', result)
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <Form submit={submit} formType="Register" />
          </div>
        </div>

        <div className="col-sm-4">
          <Card auth="Facebook" />
          <Card auth="Google" />
        </div>

      </div>
    </div>
  );
}
