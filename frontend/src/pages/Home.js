import { likeLionMembers } from '../data/likeLionMembers.js'

class Home extends React.Component {
  state = {
    // 모든 것을 상태로 설정하는 것은 옳지 않다.
    members: likeLionMembers,
  }

  initialMembers = likeLionMembers
  labCount = this.calcLabCount() // this.members (105) 에서 lab 몇 개? 계산

  calcLabCount() {
    // 로직?
    // 데이터 분석
    // 내가 무엇을 해야하나?
    // - 105개의 데이터를 순회해서 lab의 개수가 몇 개인지를 확인해야 한다.
    // 그걸 하려면 어떤 로직을 짜야 하나?
    // - 배열??? 아니면 다른 데이터를?
    // 그러면 결과 값은 무엇을 내보내야 하나?
    // - 랩의 개수

    // 내가 해결한 코드
    // const lab = this.initialMembers.filter((item, index) => {
    //   return (
    //     this.initialMembers.findIndex((item2, index2) => {
    //       return item.lab === item2.lab
    //     }) === index
    //   )
    // })

    let labSet = new Set()

    this.state.members.forEach(({ lab }) => {
      labSet.add(lab)
    })

    return labSet.size
  }

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
          {Array(this.labCount)
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
