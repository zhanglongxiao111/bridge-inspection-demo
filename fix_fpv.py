import io

with io.open('modules/Drone.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_cond = '''                // Interrupt auto-nav if in FPV
                if (this.isFPV && this.flightState === 'AUTO_NAV') {
                    this.flightState = 'MANUAL';
                    if(this.onStateChange) this.onStateChange('MANUAL');
                }'''

new_cond = '''                // Interrupt auto-nav or IDLE if in FPV
                if (this.isFPV && (this.flightState === 'AUTO_NAV' || this.flightState === 'IDLE' || this.flightState === 'PHOTOGRAPHING')) {
                    this.flightState = 'MANUAL';
                    if(this.onStateChange) this.onStateChange('MANUAL');
                }'''

content = content.replace(old_cond, new_cond)

with io.open('modules/Drone.js', 'w', encoding='utf-8') as f:
    f.write(content)
