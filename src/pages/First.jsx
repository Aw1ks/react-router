function First() {
    const data = [
        { name: 'John', age: 25, email: 'john@gmail.com', work: 'Doctor', car: 'Ferrari' },
        { name: 'Mary', age: 32, email: 'mary@yahoo.com', work: 'Police', car: 'Bentley' },
        { name: 'Bob', age: 45, email: 'bob@hotmail.com', work: 'Dancer coach', car: 'Lada' },
        { name: 'Mike', age: 33, email: 'alice@gmail.com', work: 'Chef', car: 'Bus' },
        { name: 'Alex', age: 34, email: 'alice@gmail.com', work: 'Housewife', car: 'Renault' },
        { name: 'Ivan', age: 18, email: 'alice@gmail.com', work: 'Pro-Gamer', car: 'Жигули' },
        { name: 'Valera', age: 52, email: 'alice@gmail.com', work: 'President', car: 'Plane' },
        { name: 'Kris', age: 63, email: 'alice@gmail.com', work: 'Killer', car: 'Porshe' },
    ]

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Emaiil</th>
                        <th>Work</th>
                        <th>Car</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                            <td>{item.work}</td>
                            <td>{item.car}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default First;
