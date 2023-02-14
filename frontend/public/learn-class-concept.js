// 유틸리티 함수
function getRandomNumber(n) {
  return Math.round(Math.random() * n)
}

function generateUniqueId() {
  const characters = 'abcdefghijklmn'.split('')
  let key = ''
  characters.forEach((c) => {
    key += characters[getRandomNumber(characters.length - 1)]
  })
  return `euid-${key}`
}

// 클래스 문법
class Event {
  // private 필드
  // 접근 제어자
  #uid = '' // 외부에서 접근 불가능

  // 생성자(constructor)
  constructor(type, date) {
    // this는 생성된 Event 클래스의 인스턴스(객체)를 말함
    this.type = type
    this.date = date
    this.#uid = generateUniqueId()
  }

  // 인스턴스(instance):생성된 객체
  // 생성된 객체만 사용 가능한 메서드: 인스턴스 메서드
  getType() {
    return this.type
  }

  getUid() {
    return this.#uid
  }
}

const studyEvent = new Event('study', '2023. 2. 18')
const movieEvent = new Event('movie', '2023. 3. 7')

studyEvent.getType()
studyEvent.date
