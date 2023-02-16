class Home extends React.Component {
  state = {
    members: this.props.likeLionMembers ?? [],
  }

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.state.members.filter((member) => member.lab === labNumber),
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role="group" style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            style={{ marginBottom: 20 }}
            onClick={() => {
              this.handleFilterLab(7)
            }}
          >
            LAB 7조 모여!
          </button>
          <button
            type="button"
            style={{ marginBottom: 20 }}
            onClick={() => {
              this.handleFilterLab(10)
            }}
          >
            LAB 10조 모여!
          </button>
        </div>

        <ul>
          {this.state.members.map(({ id, name, lab, gender }) => (
            <li key={id}>
              <p>
                <b>{lab}</b>
                <span>{gender?.includes('여성') ? '👩' : '👨'}</span> {name}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default Home
