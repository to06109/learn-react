import { likeLionMembers } from '../data/likeLionMembers.js'

class Home extends React.Component {
  state = {
    // 모든 것을 상태로 설정하는 것은 옳지 않다.
    members: likeLionMembers,
  }

  initialMembers = likeLionMembers

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.initialMembers.filter((member) => member.lab === labNumber),
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role="group" style={{ display: 'flex', gap: 8 }}>
          {Array(11)
            .fill(null)
            .map((_, index) => {
              let labIndex = index + 1
              return (
                <LabButton
                  key={index}
                  onFilter={() => {
                    this.handleFilterLab(labIndex)
                  }}
                >
                  LAB {labIndex}
                </LabButton>
              )
            })}
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

function LabButton(props) {
  return (
    <button type="button" style={{ marginBottom: 20 }} onClick={props.onFilter}>
      {props.children}
    </button>
  )
}

export default Home
