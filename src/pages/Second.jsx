function Second() {
    return (
        <div className='form-container'>
            <form className='form'>
                <h2 className='form-title'>Sign up</h2>
                <div className='form-group'>
                    <label>
                        Name
                        <input type='text' className='form-input'></input>
                    </label>
                    <label>
                        Email
                        <input type='text' className='form-input'></input>
                    </label>
                    <label>
                        Password
                        <input type='password' className='form-input'></input>
                    </label>
                    <button className='form-button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Second;
