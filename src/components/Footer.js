import './footer.css';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <center>
                            <p className="text-muted credit" style={{ marginTop: '2px' }}>
                                Copyright @ 2024 wellcare All rights reserved
                            </p>
                        </center>
                    </div>
                    <div className="col-sm-4" style={{ "textAlign": 'right' }}></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
