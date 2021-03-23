export default function PersonalInfo({user}) {

    const centerMargin = {
        margin: '0 auto'
      }
    return (
        
        <div class="card mt-3 col-8" style={centerMargin}>
            <div class="card-header">
                {user.username}
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
            </div>
        </div>
        
    )
}