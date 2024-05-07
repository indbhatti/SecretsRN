'use client'
import Card from '../Card';
import Form from '../Form'

const submit = async (user: { username: string, password: string }) => {
  try {
    const response = await fetch(`/api/register`, {
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

export default async function Register() {
  async function submitForm(user: { username: string, password: string }) {
    await submit(user);
  }
  return (
    <div className="container mt-5">
      <h1>Register</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <Form submit={submitForm} formType="Register" />
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
