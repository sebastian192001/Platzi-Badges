import React from 'react';
import './styles/BadgeEdit.css'
import Header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading';
import api from '../api';
class BageEdit extends React.Component {
    state={
       loading: true, 
       error: null, 
        form:{
            firstName:'',
            lastName:'',
            email: '',
            jobTitle:'',
            twitter:'',
    }};

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading:true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading:false, form:data })
        } catch (error) {
            this.setState({ loading:false, error:error })
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading : true, error : null})

        try {
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({ loading : false})

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading : false, error : error})
        }
    }

    render() {
        if ( this.state.loading) {
            return <PageLoading/>
        }
        return(<React.Fragment>
            <div className="BadgeEdit__hero">
                <img className="img-fluid" src={Header} alt=""/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName|| 'LAST_NAME'}
                            jobTitle={this.state.form.jobTitle|| 'JOB_TITLE'}
                            twitter={this.state.form.twitter|| '@TWITTER'}
                            email={this.state.form.email|| 'EMAIL'}
                            avatarUrl='https://i.pinimg.com/originals/6c/2e/07/6c2e07660c6fcf90d6a362ced622e1ad.png'
                        />
                    </div>
                    <div className="col-6">
                    <h1>edit Attendant</h1>
                        <BadgeForm
                         onChange={this.handleChange}
                         onSubmit={this.handleSubmit} 
                         formValues={this.state.form}
                         error={this.state.error}
                         />
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default BageEdit;