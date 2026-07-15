import CoreGraphics
import Foundation

let windows = CGWindowListCopyWindowInfo([.optionOnScreenOnly], kCGNullWindowID)! as NSArray
for case let window as NSDictionary in windows {
    let owner = window[kCGWindowOwnerName as String] as? String ?? ""
    let name = window[kCGWindowName as String] as? String ?? ""
    if owner.contains("Chrome") || owner.contains("ChatGPT") {
        let id = window[kCGWindowNumber as String] ?? ""
        let bounds = window[kCGWindowBounds as String] ?? ""
        print("\(id)\t\(owner)\t\(name)\t\(bounds)")
    }
}
