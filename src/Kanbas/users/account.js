import * as client from "./client";
import "./signin.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
function Account() {
    const [account, setAccount] = useState(null);
    const { id } = useParams();
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
      };    
    const navigate = useNavigate();
    const save = async () => {
        await client.updateUser(account);
    };
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
          } else {
            fetchAccount();
          }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div >
                    <input value={account.username} className="form-control input"
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input value={account.firstName} className="form-control input "
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input value={account.lastName} className="form-control input"
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input value={account.dob} className="form-control input" type="date"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input value={account.email} className="form-control input"
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select className="account" onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary w-100 mb-2" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger w-100 mb-2 "onClick={signout}>
                        Signout
                    </button>
                    <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;

